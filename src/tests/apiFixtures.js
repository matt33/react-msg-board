/* eslint-disable */
export const api = {
  fetchMessages: (params) => (
    {data: [
      {
        "id": 3,
        "content": "Positive thinking will let you do everything better than negative thinking will.",
        "color": "#672d93"
      },
      {
        "id": 4,
        "content": "It always seems impossible until it is done.",
        "color": "#2795D9"
      }
    ]}
  ),
  fetchColors: () => (
    {data: [
      {
        "name": "Blue",
        "value": "#2795D9",
        "id": 1
      },
      {
        "name": "Purple",
        "value": "#672d93",
        "id": 2
      },
      {
        "name": "Rainbow",
        "value": "linear-gradient(to right, #e6e600, #f7941d 17%, #fff100 34%, #00a650 51%, #0054a5 68%, #672d93 85%, #672d93)",
        "id": 3
      }
    ]}
  ),
  postMessage: (content, color) => (
    {
      data:
        {
          "id": 5,
          "content": content,
          "color": color
        }
    }
  )
}
/* eslint-enable */
