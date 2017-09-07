/*我要开始搜集工作中常用的方法。恩。。就是这样*/
var util = {
    //改变页面滚动高度事件
    /*
     *time:滚动的时间
     *start:开始的高度
     *end:结束的高度
     */
    changeScrollTop: function(time, start, end) {
        //传入一个时间。根据时间来计算当前的速度
        var time = time || 300;
        //首先是获取速度。用结束高度减去初始高度除以时间
        var vi = parseInt((end - start) / time * 25);
        function setCurrpos() {
            start += vi;
            $(window).scrollTop(start);
            //当速度小于0时并且初始高度比结束高度高
            //或者速度大于0且初始高度比结束高度小
            //才继续执行动画
            if ((vi < 0 && start >= end) || (vi >= 0 && start <= end)) {
                setTimeout(function() {
                    setCurrpos();
                }, 25);
            }
        }
        setTimeout(function() {
            setCurrpos();
        }, 25);
    }
}