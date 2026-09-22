import request from '@/request/request'

/** addSpace POST /api/space/add */
export async function addSpaceUsingPost(body: API.SpaceAddDTO, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong_>('/api/space/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getSpaceCategoryAnalyze POST /api/space/analyze/category */
export async function getSpaceCategoryAnalyzeUsingPost(
  body: API.SpaceCategoryAnalyzeDTO,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListSpaceCategoryAnalyzeVO_>('/api/space/analyze/category', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getSpaceRankAnalyze POST /api/space/analyze/rank */
export async function getSpaceRankAnalyzeUsingPost(
  body: API.SpaceRankAnalyzeDTO,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListSpaceRankAnalyzeVO_>('/api/space/analyze/rank', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getSpaceSizeAnalyze POST /api/space/analyze/size */
export async function getSpaceSizeAnalyzeUsingPost(
  body: API.SpaceSizeAnalyzeDTO,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListSpaceSizeAnalyzeVO_>('/api/space/analyze/size', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getSpaceTagAnalyze POST /api/space/analyze/tag */
export async function getSpaceTagAnalyzeUsingPost(
  body: API.SpaceTagAnalyzeDTO,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListSpaceTagAnalyzeVO_>('/api/space/analyze/tag', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getSpaceUsageAnalyze POST /api/space/analyze/usage */
export async function getSpaceUsageAnalyzeUsingPost(
  body: API.SpaceUsageAnalyzeDTO,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseSpaceUsageAnalyzeVO_>('/api/space/analyze/usage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getSpaceUserAnalyze POST /api/space/analyze/user */
export async function getSpaceUserAnalyzeUsingPost(
  body: API.SpaceUserAnalyzeDTO,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListSpaceUserAnalyzeVO_>('/api/space/analyze/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** deleteSpace POST /api/space/delete */
export async function deleteSpaceUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/space/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** editSpace POST /api/space/edit */
export async function editSpaceUsingPost(body: API.SpaceEditDTO, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/space/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getSpaceById GET /api/space/get */
export async function getSpaceByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSpaceByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseSpace_>('/api/space/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** getSpaceVOById GET /api/space/get/vo */
export async function getSpaceVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSpaceVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseSpaceVO_>('/api/space/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}

/** listSpaceLevel GET /api/space/list/level */
export async function listSpaceLevelUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListSpaceLevelVO_>('/api/space/list/level', {
    method: 'GET',
    ...(options || {}),
  })
}

/** listSpaceByPage POST /api/space/list/page */
export async function listSpaceByPageUsingPost(
  body: API.SpaceQueryDTO,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageSpace_>('/api/space/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listSpaceVOByPage POST /api/space/list/page/vo */
export async function listSpaceVoByPageUsingPost(
  body: API.SpaceQueryDTO,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageSpaceVO_>('/api/space/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateSpace POST /api/space/update */
export async function updateSpaceUsingPost(
  body: API.SpaceUpdateDTO,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/space/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
