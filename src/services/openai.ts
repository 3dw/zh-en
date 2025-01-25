import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
})

export interface StoryResponse {
  content: string
  imageUrl: string
  audioUrl: string
}

export async function generateStoryContent(
  childName: string,
  ageGroup: string,
  storyType: string
): Promise<string> {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: `You are a professional children's story writer. Create engaging, age-appropriate stories in English.`
      },
      {
        role: 'user',
        content: `Write a ${storyType} story for a ${ageGroup} year old child named ${childName}.
        The story should be engaging, educational, and suitable for bedtime reading.
        Keep the language appropriate for the age group.
        The story should be divided into 3-4 paragraphs.
        Each paragraph should be around 100 words.`
      }
    ],
    temperature: 0.7
  })

  const content = completion.choices[0]?.message?.content
  if (!content) {
    throw new Error('Failed to generate story content')
  }
  return content
}

export async function generateImage(storyContent: string): Promise<string> {
  const response = await openai.images.generate({
    model: 'dall-e-3',
    prompt: `Create a child-friendly, colorful illustration for this story: ${storyContent.substring(0, 300)}...`,
    n: 1,
    size: '1024x1024',
    quality: 'standard',
    style: 'vivid'
  })

  const imageUrl = response.data[0]?.url
  if (!imageUrl) {
    throw new Error('Failed to generate image')
  }
  return imageUrl
}

export async function generateAudio(text: string): Promise<string> {
  const response = await openai.audio.speech.create({
    model: 'tts-1',
    voice: 'alloy',
    input: text
  })

  // 將音頻數據轉換為 Blob URL
  const blob = new Blob([await response.arrayBuffer()], { type: 'audio/mpeg' })
  return URL.createObjectURL(blob)
}
