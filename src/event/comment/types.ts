import { BaseProps } from '../types'

interface CommentProps extends BaseProps {
  name: string
  content: string
  itemId: string
}

export { CommentProps }
