import { useReducer } from "react"
//勾选
const CHECKED_CHANGE = "CHECKED_CHANGE"
//全选
const CHECKED_ALL_CHANGE = "CHECKED_ALL_CHANGE"

//勾选
export const useChecked = (data,id)=>{
    const [checkedMap, dispatch] = useReducer((CheckedMapParams,action)=>{
        switch (action.type) {
        case CHECKED_CHANGE: {
          const { payload } = action
          const { dataItem, checked } = payload
          const { id } = dataItem
          console.log(id); // 输出用户选择图片 id。
          return {
            ...CheckedMapParams,
            [id]: checked,
          }
        }
        case CHECKED_ALL_CHANGE: {
          const { payload: newCheckedAll } = action
          const newCheckedMap = {}
          // 全选
          if (newCheckedAll) {
            data.forEach(dataItem => {
              newCheckedMap[dataItem.id] = true
            })
          }
          return newCheckedMap
        }
        default:
          return CheckedMapParams
      }
    },{},
    )
    //勾选变更
    const onCheckChange=(dataItem, checked) => {
      dispatch({
        type: CHECKED_CHANGE,
        payload: {
          dataItem,
          checked,
        },
      })
    }

  const filterChecked = () => {
    return (
      Object.entries(checkedMap)
        // 通过这个filter 筛选出所有checked状态为true的项
        .filter(entries => Boolean(entries[1]))
        // 再从Data中根据id来map出选中列表
        .map(([checkedId]) => data.find(({ id }) => id === Number(checkedId)))
    )
  }
  /** 是否全选状态 */
  const checkedAll =data.length !== 0 && filterChecked().length === data.length
  
  /** 全选反选函数 */
  const onCheckedAllChange = (newCheckedAll) => {
    dispatch({
      type: CHECKED_ALL_CHANGE,
      payload: newCheckedAll,
    })
  }

  return {
    checkedMap,
    dispatch,
    onCheckChange,
    checkedAll,
    onCheckedAllChange,
  }
}