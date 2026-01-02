import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {

  const tabs = ['photos', 'videos', 'gif']
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.search.activeTab)

  return (
    <div className='flex gap-5 px-10 mt-1'>
      {tabs.map(function (elem, idx) {
        return (
          <button
            className={`${(activeTab == elem ? 'border-b-2' : 'border-none')} transition cursor-pointer active:scale-95 px-2 py-1 uppercase text-sm`}
            key={idx}
            onClick={() => {dispatch(setActiveTab(elem))}}
          >{elem}</button>
        )
      })}
    </div>
  )
}

export default Tabs
