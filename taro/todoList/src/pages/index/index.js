import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'Taro首页'
  }

  constructor(props){
    super(props);  
    // 将component基类的方法执行一下，要用constructor  一定要先super一下
    // 状态初始化  data->state
    this.state ={
      list:[
        '五点起床',
        'coding',
        '十二点睡觉'
      ],
      inputval:''
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  inputHandler(e){
    this.inputval = e.target.value
  }

  addItem(){
    let { list } = this.state
    const inputval = this.inputval;
    if(inputval==''){
      return
    }else{
      list.push(inputval)
    }
    this.setState({
      list,
      inputval:''
    })
  }

  delItem(index){
    let {list} = this.state;
    list.splice(index,1);
    this.setState({
      list
    })
  }

  render () {
    let {list,inputval}=this.state
    return (
      <View className='index'>
        <Input className='input' type='text' value={inputval} onInput={this.inputHandler.bind(this)}></Input>
        <Text className='add' onClick={this.addItem.bind(this)}>添加</Text>
        {
          list.map((item,index)=>{
            return <View>
              <Text>{index+1}.{item}</Text>
              <Text className='del' onClick={this.delItem.bind(this,index)}>删除</Text>
            </View>
          })
        }
      </View>
    )
  }
}
