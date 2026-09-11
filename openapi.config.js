import { generateService } from '@umijs/openapi'

generateService({
  requestLibPath: "import request from '@/request/request'",
  schemaPath: 'http://localhost:8123/api/v2/api-docs',
  serversPath: './src',
})
  .then(() => {
    console.log('openapi生成成功')
  })
  .catch((e) => {
    console.error('openapi生成失败', e)
  })
