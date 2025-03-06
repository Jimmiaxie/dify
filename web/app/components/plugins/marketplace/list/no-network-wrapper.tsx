'use client'
import { useMixedTranslation } from '@/app/components/plugins/marketplace/hooks'
import s from './style.module.css'
import Button from '@/app/components/base/button'

type ListWrapperProps = {
  locale: string
}
const ListWrapper = ({
  locale,
}: ListWrapperProps) => {
  const { t } = useMixedTranslation(locale)

  const reloadThePage = () => {
    location.reload()
  }
  return (
    <div className='flex grow justify-center text-center shrink-0 bg-background-default-subtle'>
      <div className={s.noNetworWarp}>
        <div className={s.noNetworIcon}></div>
        <div className={s.noNetworTitle}>暂无网络</div>
        <Button
          className={s.noNetworBtn}
          onClick={reloadThePage}
        >
          {t('common.operation.remove')}
        </Button>
      </div>
    </div>
  )
}

export default ListWrapper
