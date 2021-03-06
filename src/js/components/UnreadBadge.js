import { Badge } from 'antd'
const { observer, inject } = MobxReact
import 'style/components/unread-badge'

@inject('store')
@observer
class UnreadBadge extends React.Component {
  render () {
    const { history, store } = this.props
    const { unreadMsgCount, changePageTo } = store

    return (
      <Badge
        className='count-badge'
        text={unreadMsgCount}
        overflowCount={99}
        onClick={() => changePageTo('chat', history)}
      />
    )
  }
}
module.exports = UnreadBadge
