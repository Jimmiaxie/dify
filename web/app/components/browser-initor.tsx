'use client'
import { useStore as useAppStore } from '@/app/components/app/store'

class StorageMock {
  data: Record<string, string>

  constructor() {
    this.data = {} as Record<string, string>
  }

  setItem(name: string, value: string) {
    this.data[name] = value
  }

  getItem(name: string) {
    return this.data[name] || null
  }

  removeItem(name: string) {
    delete this.data[name]
  }

  clear() {
    this.data = {}
  }
}

let localStorage, sessionStorage

try {
  localStorage = globalThis.localStorage
  sessionStorage = globalThis.sessionStorage
}
catch (e) {
  localStorage = new StorageMock()
  sessionStorage = new StorageMock()
}

Object.defineProperty(globalThis, 'localStorage', {
  value: localStorage,
})

Object.defineProperty(globalThis, 'sessionStorage', {
  value: sessionStorage,
})

const BrowserInitor = ({
  children,
}: { children: React.ReactElement }) => {
  // 设置隐藏显示顶部导航栏
  const setHideHeader = useAppStore(state => state.setHideHeader)
  const urlParams = new URLSearchParams(window.location.search)
  urlParams.forEach((value, key) => {
    if (key === 'hideHeader') setHideHeader(+value === 1)
  })

  return children
}

export default BrowserInitor
