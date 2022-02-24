export default {
  /**
   * 动画方法， 将动画css加入到元素上，返回promise提供执行后续操作（将动画重置）
   * @param $el 当前被执行动画的元素
   * @param animationList 动画列表
   * @param isDebugger 动画列表
   * @returns {Promise<void>}
   */
  async runAnimation(that, animationList = [], isDebug, callback) {
    const $el = that.$el
    const playFn = function (animation) {
      return new Promise(resolve => {
        $el.style.animationName = animation.type
        $el.style.animationDuration = `${animation.duration}s`
        // 如果是循环播放就将循环次数置为1，这样有效避免编辑时因为预览循环播放组件播放动画无法触发animationend来暂停组件动画
        $el.style.animationIterationCount = animation.infinite
          ? isDebug
            ? 1
            : 'infinite'
          : animation.interationCount
        $el.style.animationDelay = `${animation.delay}s`
        $el.style.animationFillMode = 'both'
        const resolveFn = function () {
          $el.removeEventListener('animationend', resolveFn, false)
          $el.addEventListener('animationcancel', resolveFn, false)
          resolve()
        }
        $el.addEventListener('animationend', resolveFn, false)
        $el.addEventListener('animationcancel', resolveFn, false)
      })
    }
    for (let i = 0, len = animationList.length; i < len; i++) {
      if (animationList[i].isout) {
        // 顺序不能乱
        await playFn(animationList[i])
        that.$nextTick(() => {
          $el.style.visibility = 'hidden'
        })
      } else {
        // 部分进入动画在开始动画之前就显示出来了,导致显示两个组件,这里加一个判断,动画播放才显示
        if (animationList[i].delay) {
          setTimeout(() => {
            that.$nextTick(() => {
              $el.style.visibility = 'visible'
            })
          }, animationList[i].delay * 1000)
        } else {
          that.$nextTick(() => {
            $el.style.visibility = 'visible'
          })
        }
        await playFn(animationList[i])
        // that.$nextTick( async ()=>await playFn(animationList[i]))
      }
    }
    if (callback) {
      callback()
    }
  },
  // 暂停与播放动画
  pauseAnimations(that) {
    const $el = that.$el
    $el.style.animationPlayState = 'paused'
  },
  continueAnimations(that) {
    const $el = that.$el
    $el.style.animationPlayState = 'running'
  }
}
