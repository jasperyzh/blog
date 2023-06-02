exports.handler = async function (event, context) {
    const accessToken = '<your-access-token>'
    const userId = '765347351899268'
    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink'
    const apiUrl = `https://graph.instagram.com/${userId}/media?fields=${fields}&access_token=${accessToken}`

    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: error.message
        }
    }
}