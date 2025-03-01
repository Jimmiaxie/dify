'use client'
import React from 'react'
import ApiBasedExtensionPage from '@/app/components/header/account-setting/api-based-extension-page'
import { useTranslation } from 'react-i18next'

const Apps = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='grow relative flex flex-col overflow-y-auto border-t border-divider-subtle rounded-t-xl bg-components-panel-bg'>
        <div className='sticky top-0 flex min-h-[60px] px-12 pt-4 pb-2 items-center self-stretch gap-1 z-10 bg-components-panel-bg'>
          <div className='shrink-0 text-text-primary title-2xl-semi-bold'>{t('common.settings.apiBasedExtension')}</div>
        </div>
        <div className='px-12 pt-2 grow relative'>
          <ApiBasedExtensionPage />
        </div>
      </div>
    </>
  )
}

export default React.memo(Apps)
