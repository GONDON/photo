import React from "react";
import { useChecked } from "./use-checked"
import "./index.css"

const Page = () => {
  const pictures = [
  {
    id: '1',
    name: 'foo',
    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
  },
  {
    id: '2',
    name: 'foo',
    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
  },
  {
    id: '3',
    name: 'foo',
    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
  },
];

    const {
        checkedMap,
        onCheckChange,
        checkedAll,
        onCheckedAllChange
    } = useChecked(pictures)
    const onCheckAll = (e,item)=>{
        const { checked } = e.target
        onCheckedAllChange(checked)
    }
  const Head = ()=>{
      return (
          <div className="check-all">
            <input
                checked={checkedAll}
                onChange={onCheckAll}
                type="checkbox"
            />
            全选
            <span className='span'>{`已选中${Object.keys(checkedMap).length}个商品`}</span>
        </div>
      )
  }
  const onCheck = (e,item)=>{
    const { checked } = e.target
    onCheckChange(item,checked)
  }
    console.log(checkedMap)
  return (
    <div>
        {Head()}
        <div 
            className='img-list'
        >
            {
                pictures.map(item => {
                    const { id,name,url } = item
                    const checked = checkedMap[item.id] || false
                    return (
                    <div key={id} >
                        <input checked={checked} type="checkbox" onChange={(e)=>{onCheck(e,item)}}/>
                        <img src={url} alt='图片'/>
                        <div>{name}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
};

export default Page