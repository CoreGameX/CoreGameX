import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveTab } from '../store/activeTabSlice'

export default function SubNavigation({ tabs, defaultTab }) {
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.tab.activeTab)

  // Initialize activeTab on first render
  useEffect(() => {
    dispatch(setActiveTab(defaultTab));
  }, [defaultTab, dispatch]);

  return (
    <div className="w-full -mt-10">
      {/* Mobile Layout - Fixed width container */}
      <div className="sm:hidden px-3">
        <div className="max-w-lg mx-auto">
          <div className="flex bg-neutral-800 p-1 rounded-full overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => dispatch(setActiveTab(tab.id))}
                className={`
                  flex-shrink-0 text-center
                  relative items-center justify-center
                  px-3 py-3 min-h-10
                  text-sm font-medium leading-5
                  border-0 outline-none
                  rounded-full cursor-pointer
                  transition-all duration-200 ease-in-out
                  whitespace-nowrap select-none
                  ${activeTab === tab.id
                    ? 'bg-white text-black shadow-sm font-semibold py-1'
                    : 'bg-transparent text-gray-400 hover:text-white hover:bg-neutral-700'
                  }
                `}
                style={{
                  background: activeTab === tab.id ? '#ffffff' : 'transparent',
                  color: activeTab === tab.id ? '#000000' : '#9ca3af',
                  boxShadow: activeTab === tab.id ? '0 1px 2px 0 rgb(0 0 0 / 0.05)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.backgroundColor = '#404040'
                    e.target.style.color = '#ffffff'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.color = '#9ca3af'
                  }
                }}
              >
                {tab.label}
              </div>
            ))}
          </div>
        </div>
        <div className="border-b border-neutral-700 mt-4"></div>
      </div>

      {/* Desktop Layout - max-w-screen-sm with evenly distributed tabs */}
      <div className="hidden sm:block">
        <div className="max-w-screen-sm mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center w-full">
              <div className="flex bg-neutral-800 rounded-full p-1 w-full">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    onClick={() => dispatch(setActiveTab(tab.id))}
                    className={`
                      flex-1 text-center
                      relative items-center justify-center
                      p-4 min-h-10
                      text-lg font-medium leading-5
                      border-0 outline-none
                      rounded-full cursor-pointer
                      transition-all duration-200 ease-in-out
                      whitespace-nowrap select-none
                      ${activeTab === tab.id
                        ? 'bg-white text-black shadow-sm font-semibold '
                        : 'bg-transparent text-gray-400 hover:text-white hover:bg-neutral-700'
                      }
                    `}
                    style={{
                      background: activeTab === tab.id ? '#ffffff' : 'transparent',
                      color: activeTab === tab.id ? '#000000' : '#9ca3af',
                      boxShadow: activeTab === tab.id ? '0 1px 2px 0 rgb(0 0 0 / 0.05)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (activeTab !== tab.id) {
                        e.target.style.backgroundColor = '#404040'
                        e.target.style.color = '#ffffff'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== tab.id) {
                        e.target.style.backgroundColor = 'transparent'
                        e.target.style.color = '#9ca3af'
                      }
                    }}
                  >
                    {tab.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-b border-neutral-700 mt-4"></div>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}