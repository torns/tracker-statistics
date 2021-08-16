import { expose } from './event/expose'
import { click } from './event/click'
import { cart } from './event/cart'
import { buy } from './event/buy'
import { collect } from './event/collect'
import { like } from './event/like'
import { unlike } from './event/unlike'
import { comment } from './event/comment'
import { share } from './event/share'
import { subscribe } from './event/subscribe'
import { stay } from './event/stay'

const trackerStatistics = {
  expose,
  click,
  cart,
  buy,
  collect,
  like,
  unlike,
  comment,
  share,
  subscribe,
  stay
}

export default trackerStatistics
