import { getIntelligence } from './base'

/** 获取AI智能体配置 */
export const getIntelligenceConfig = async () => {
  return getIntelligence<{ show_featured: boolean, show_discovery: boolean }>('/tools/config')
}
