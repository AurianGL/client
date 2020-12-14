import { FeedbackType } from "../pages/Feedback"

const rootPath = "https://obscure-reaches-09029.herokuapp.com/"

type indexProps = {
  page: number,
  postPerPage: number
}

export const getFeedbacksIndex = async (props: indexProps) => {
  const {page, postPerPage} = props
  const query = await fetch(`${rootPath}/feedbacks?p=${page}&n=${postPerPage}`)
  console.log(query)
  const res = await query.json()
  console.log(res)
  return res
  // return res
}

export const sendFeedack = async (values: FeedbackType) => {
  const {lastName, firstName, email, content} = values
  const data = {
    info: {lastname: lastName, firstname: firstName, email: email},
    message: {content: content}
  }
  const query = await fetch(`${rootPath}/feedbacks`, {
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({...data})
  })
  const res = await query.json()
  return res
}