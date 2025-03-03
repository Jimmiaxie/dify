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
  try {
    const isDevelopment = process.env.NODE_ENV === 'development'
    if(isDevelopment) {
      window.addEventListener('message', (event) => {
        const { hideHeader } = event.data
        setHideHeader(!!hideHeader)
      }, false)
    }
    else {
      const parentWindow = window.parent
      const iframeElement = parentWindow.document.getElementById('aiFrame')
      if(iframeElement) {
        const hasHideHeader = iframeElement.hasAttribute('hideHeader')
        const hideHeaderValue = iframeElement.getAttribute('hideHeader')
        setHideHeader(hasHideHeader || hideHeaderValue === 'true')
      }
      const windowHideHeaderValue = (parentWindow as any)?.hiddenHeader
      if(windowHideHeaderValue) setHideHeader(windowHideHeaderValue)
    }
  }
  catch (error) {
    console.log(error)
  }

  return children
}

export default BrowserInitor
