'use client'
import React, { useState } from 'react'
import ModelProviderPage from '@/app/components/header/account-setting/model-provider-page'
import { useTranslation } from 'react-i18next'
import Input from '@/app/components/base/input'

const Apps = () => {
  const { t } = useTranslation()
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <>
      <div className='grow relative flex flex-col overflow-y-auto border-t border-divider-subtle rounded-t-xl bg-components-panel-bg'>
        <div className='sticky top-0 flex min-h-[60px] px-12 pt-4 pb-2 items-center self-stretch gap-1 z-10 bg-components-panel-bg'>
          <div className='shrink-0 text-text-primary title-2xl-semi-bold'>{t('common.settings.provider')}</div>
          <div className='grow flex justify-end'>
            <Input
              showLeftIcon
              wrapperClassName='!w-[200px]'
              className='!h-8 !text-[13px]'
              onChange={e => setSearchValue(e.target.value)}
              value={searchValue}
            />
          </div>
        </div>
        <div className='px-12 pt-2 grow relative'>
          <ModelProviderPage searchText={searchValue} />
        </div>
      </div>
    </>
  )
}

export default React.memo(Apps)
