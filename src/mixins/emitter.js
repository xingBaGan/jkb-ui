/**
 *
 *让子组件触发相应得事件
 * @param {*} ComponentName 需要触发得子组件
 * @param {*} eventName 事件名称
 * @param {*} params 事件参数
 */
function broadcast(ComponentName,eventName,params){
    this.$children.forEach(function(child){
        var name = child.$options.name; //获取孩子组件名
        if(name === ComponentName){
            //apply 参数数组
            child.$emit.apply(child,[eventName].concat(params));//所有子组件触发事件
        }else{
            //递归调用子组件
            broadcast.apply(child,[ComponentName,eventName].concat(params));//所有子组件触发事件
        }
    })
}
export default{
    methods:{
        
        /**
         *
         *
         * @param {*} componentName 组件名
         * @param {*} eventName 触发得事件
         * @param {*} params 传递参数
         */
        dispatch(componentName, eventName, params){
            var parent = this.$parent || this.$root;
            var name = parent.$options.ComponentName;
            while(parent &&( !name||name !== componentName)){
                //继续找父组件
                parent = parent.$parent
                if(parent){
                    name = parent.$options.componentName;
                }
            }
            if(parent){
                parent.$emit.apply(parent,[eventName].concat(params))
            }
        },
        broadcast(componentName, eventName, params) {
          broadcast.call(this, componentName, eventName, params);
        }
    }
}