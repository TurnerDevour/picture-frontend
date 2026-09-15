declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number
    data?: boolean
    message?: string
  }

  type BaseResponseInt_ = {
    code?: number
    data?: number
    message?: string
  }

  type BaseResponseListSpaceLevelVO_ = {
    code?: number
    data?: SpaceLevelVO[]
    message?: string
  }

  type BaseResponseLoginUserVO_ = {
    code?: number
    data?: LoginUserVO
    message?: string
  }

  type BaseResponseLong_ = {
    code?: number
    data?: number
    message?: string
  }

  type BaseResponsePagePicture_ = {
    code?: number
    data?: PagePicture_
    message?: string
  }

  type BaseResponsePagePictureVO_ = {
    code?: number
    data?: PagePictureVO_
    message?: string
  }

  type BaseResponsePageSpace_ = {
    code?: number
    data?: PageSpace_
    message?: string
  }

  type BaseResponsePageSpaceVO_ = {
    code?: number
    data?: PageSpaceVO_
    message?: string
  }

  type BaseResponsePageUserVO_ = {
    code?: number
    data?: PageUserVO_
    message?: string
  }

  type BaseResponsePicture_ = {
    code?: number
    data?: Picture
    message?: string
  }

  type BaseResponsePictureTagCategoryVO_ = {
    code?: number
    data?: PictureTagCategoryVO
    message?: string
  }

  type BaseResponsePictureVO_ = {
    code?: number
    data?: PictureVO
    message?: string
  }

  type BaseResponseSpace_ = {
    code?: number
    data?: Space
    message?: string
  }

  type BaseResponseSpaceVO_ = {
    code?: number
    data?: SpaceVO
    message?: string
  }

  type BaseResponseString_ = {
    code?: number
    data?: string
    message?: string
  }

  type BaseResponseUser_ = {
    code?: number
    data?: User
    message?: string
  }

  type BaseResponseUserVO_ = {
    code?: number
    data?: UserVO
    message?: string
  }

  type DeleteRequest = {
    id?: string
  }

  type getPictureByIdUsingGETParams = {
    /** id */
    id?: string
  }

  type getPictureVOByIdUsingGETParams = {
    /** id */
    id?: string
  }

  type getSpaceByIdUsingGETParams = {
    /** id */
    id?: string
  }

  type getSpaceVOByIdUsingGETParams = {
    /** id */
    id?: string
  }

  type getUserUsingGETParams = {
    /** id */
    id: string
  }

  type getUserVOUsingGETParams = {
    /** id */
    id: string
  }

  type LoginUserVO = {
    /** 创建时间 */
    createTime?: string
    /** 编辑时间 */
    editTime?: string
    /** 用户 ID */
    id?: string
    /** 更新时间 */
    updateTime?: string
    /** 账号 */
    userAccount?: string
    /** 用户头像 */
    userAvatar?: string
    /** 用户简介 */
    userProfile?: string
    /** 用户角色 */
    userRole?: string
    /** 用户昵称 */
    username?: string
  }

  type PagePicture_ = {
    current?: number
    pages?: number
    records?: Picture[]
    size?: number
    total?: number
  }

  type PagePictureVO_ = {
    current?: number
    pages?: number
    records?: PictureVO[]
    size?: number
    total?: number
  }

  type PageSpace_ = {
    current?: number
    pages?: number
    records?: Space[]
    size?: number
    total?: number
  }

  type PageSpaceVO_ = {
    current?: number
    pages?: number
    records?: SpaceVO[]
    size?: number
    total?: number
  }

  type PageUserVO_ = {
    current?: number
    pages?: number
    records?: UserVO[]
    size?: number
    total?: number
  }

  type Picture = {
    /** 分类 */
    category?: string
    /** 创建时间 */
    createTime?: string
    /** 编辑时间 */
    editTime?: string
    /** id */
    id?: string
    /** 简介 */
    introduction?: string
    /** 是否删除 */
    isDelete?: number
    /** 图片名称 */
    name?: string
    /** 图片格式 */
    picFormat?: string
    /** 图片高度 */
    picHeight?: number
    /** 图片宽高比例 */
    picScale?: number
    /** 图片体积 */
    picSize?: number
    /** 图片宽度 */
    picWidth?: number
    /** 审核信息 */
    reviewMessage?: string
    /** 状态：0-待审核; 1-通过; 2-拒绝 */
    reviewStatus?: number
    /** 审核时间 */
    reviewTime?: string
    /** 审核人 id */
    reviewerId?: number
    /** 空间 id（为空表示公共空间） */
    spaceId?: string
    /** 标签（JSON 数组） */
    tags?: string
    /** 缩略图 url */
    thumbnailUrl?: string
    /** 更新时间 */
    updateTime?: string
    /** 图片 url */
    url?: string
    /** 创建用户 id */
    userId?: string
  }

  type PictureEditDTO = {
    /** 分类 */
    category?: string
    /** id */
    id?: string
    /** 简介 */
    introduction?: string
    /** 图片名称 */
    name?: string
    /** 空间 id */
    spaceId?: string
    /** 标签（JSON 数组） */
    tags?: string[]
  }

  type PictureQueryDTO = {
    /** 分类 */
    category?: string
    /** 当前页号 */
    current?: number
    /** id */
    id?: string
    /** 简介 */
    introduction?: string
    /** 图片名称 */
    name?: string
    /** 是否只查询 spaceId 为 null 的数据 */
    nullSpaceId?: boolean
    /** 页数大小 */
    pageSize?: number
    /** 图片格式 */
    picFormat?: string
    /** 图片高度 */
    picHeight?: number
    /** 图片宽高比例 */
    picScale?: number
    /** 图片体积 */
    picSize?: number
    /** 图片宽度 */
    picWidth?: number
    /** 审核信息 */
    reviewMessage?: string
    /** 状态：0-待审核; 1-通过; 2-拒绝 */
    reviewStatus?: number
    /** 审核人 id */
    reviewerId?: number
    /** 搜索关键字 */
    searchText?: string
    sortField?: string
    sortOrder?: string
    /** 空间 id */
    spaceId?: string
    /** 标签（JSON 数组） */
    tags?: string[]
    /** 创建用户 id */
    userId?: string
  }

  type PictureReviewDTO = {
    /** 审核图片id */
    id?: string
    /** 审核信息 */
    reviewMessage?: string
    /** 审核状态 */
    reviewStatus?: number
  }

  type PictureTagCategoryVO = {
    categoryList?: string[]
    tagList?: string[]
  }

  type PictureUpdateDTO = {
    /** 分类 */
    category?: string
    /** id */
    id?: string
    /** 简介 */
    introduction?: string
    /** 图片名称 */
    name?: string
    /** 标签（JSON 数组） */
    tags?: string[]
  }

  type PictureUploadByBatchDTO = {
    /** 抓取数量 */
    count?: number
    /** 名称前缀 */
    namePrefix?: string
    /** 搜索词 */
    searchText?: string
  }

  type PictureUploadDTO = {
    /** 图片id */
    id?: string
    /** 图片名称 */
    picName?: string
    /** 空间 id */
    spaceId?: string
    /** 图片url */
    url?: string
  }

  type PictureVO = {
    /** 分类 */
    category?: string
    /** 创建时间 */
    createTime?: string
    /** 编辑时间 */
    editTime?: string
    /** id */
    id?: string
    /** 简介 */
    introduction?: string
    /** 图片名称 */
    name?: string
    /** 图片格式 */
    picFormat?: string
    /** 图片高度 */
    picHeight?: number
    /** 图片宽高比例 */
    picScale?: number
    /** 图片体积 */
    picSize?: number
    /** 图片宽度 */
    picWidth?: number
    /** 空间 id */
    spaceId?: string
    /** 标签（JSON 数组） */
    tags?: string[]
    /** 缩略图 url */
    thumbnailUrl?: string
    /** 更新时间 */
    updateTime?: string
    /** 图片 url */
    url?: string
    user?: UserVO
    /** 创建用户 id */
    userId?: string
  }

  type Space = {
    /** 创建时间 */
    createTime?: string
    /** 编辑时间 */
    editTime?: string
    /** 空间 id */
    id?: string
    /** 是否删除 */
    isDelete?: number
    /** 空间图片的最大数量 */
    maxCount?: number
    /** 空间图片的最大总大小 */
    maxSize?: number
    /** 空间级别：0-普通版 1-专业版 2-旗舰版 */
    spaceLevel?: number
    /** 空间名称 */
    spaceName?: string
    /** 当前空间下的图片数量 */
    totalCount?: number
    /** 当前空间下图片的总大小 */
    totalSize?: number
    /** 更新时间 */
    updateTime?: string
    /** 创建用户id */
    userId?: string
  }

  type SpaceAddDTO = {
    /** 空间级别：0-普通版 1-专业版 2-旗舰版 */
    spaceLevel?: number
    /** 空间名称 */
    spaceName?: string
  }

  type SpaceEditDTO = {
    /** 空间 id */
    id?: string
    /** 空间名称 */
    spaceName?: string
  }

  type SpaceLevelVO = {
    /** 空间图片的最大数量 */
    maxCount?: number
    /** 空间图片的最大总大小 */
    maxSize?: number
    /** 空间名称 */
    text?: string
    /** 空间级别：0-普通版 1-专业版 2-旗舰版 */
    value?: number
  }

  type SpaceQueryDTO = {
    /** 当前页号 */
    current?: number
    /** 空间 id */
    id?: string
    /** 页数大小 */
    pageSize?: number
    sortField?: string
    sortOrder?: string
    /** 空间级别：0-普通版 1-专业版 2-旗舰版 */
    spaceLevel?: number
    /** 空间名称 */
    spaceName?: string
    /** 创建用户id */
    userId?: string
  }

  type SpaceUpdateDTO = {
    /** 空间 id */
    id?: string
    /** 空间图片的最大数量 */
    maxCount?: number
    /** 空间图片的最大总大小 */
    maxSize?: number
    /** 空间级别：0-普通版 1-专业版 2-旗舰版 */
    spaceLevel?: number
    /** 空间名称 */
    spaceName?: string
  }

  type SpaceVO = {
    /** 创建时间 */
    createTime?: string
    /** 编辑时间 */
    editTime?: string
    /** 空间 id */
    id?: string
    /** 空间图片的最大数量 */
    maxCount?: number
    /** 空间图片的最大总大小 */
    maxSize?: number
    /** 空间级别：0-普通版 1-专业版 2-旗舰版 */
    spaceLevel?: number
    /** 空间名称 */
    spaceName?: string
    /** 当前空间下的图片数量 */
    totalCount?: number
    /** 当前空间下图片的总大小 */
    totalSize?: number
    /** 更新时间 */
    updateTime?: string
    user?: UserVO
    /** 创建用户id */
    userId?: string
  }

  type uploadPictureUsingPOSTParams = {
    /** 图片id */
    id?: string
    /** 图片名称 */
    picName?: string
    /** 空间 id */
    spaceId?: string
    /** 图片url */
    url?: string
  }

  type User = {
    /** 账号是否激活 */
    accountActive?: string
    /** 创建时间 */
    createTime?: string
    /** 编辑时间 */
    editTime?: string
    /** 用户 ID */
    id?: string
    /** 是否删除（0：未删除，1：已删除） */
    isDelete?: number
    /** 更新时间 */
    updateTime?: string
    /** 账号 */
    userAccount?: string
    /** 用户头像 */
    userAvatar?: string
    /** 密码 */
    userPassword?: string
    /** 用户简介 */
    userProfile?: string
    /** 用户角色（角色：user，admin） */
    userRole?: string
    /** 用户昵称 */
    username?: string
  }

  type UserAddDTO = {
    /** 用户账号 */
    userAccount: string
    /** 用户头像 */
    userAvatar?: string
    /** 用户简介 */
    userProfile?: string
    /** 用户角色 */
    userRole?: string
    /** 用户昵称 */
    username: string
  }

  type UserLoginDTO = {
    /** 用户账号 */
    userAccount: string
    /** 用户密码 */
    userPassword: string
  }

  type UserQueryDTO = {
    /** 当前页号 */
    current?: number
    /** 用户id */
    id?: string
    /** 页数大小 */
    pageSize?: number
    sortField?: string
    sortOrder?: string
    /** 用户账号 */
    userAccount?: string
    /** 用户简介 */
    userProfile?: string
    /** 用户角色 */
    userRole?: string
    /** 用户昵称 */
    username?: string
  }

  type UserRegisterDTO = {
    /** 校验密码 */
    checkPassword: string
    /** 用户账号 */
    userAccount: string
    /** 用户密码 */
    userPassword: string
  }

  type UserUpdateDTO = {
    /** 用户id */
    id: string
    /** 用户账号 */
    userAccount: string
    /** 用户头像 */
    userAvatar?: string
    /** 用户简介 */
    userProfile?: string
    /** 用户角色 */
    userRole?: string
    /** 用户昵称 */
    username: string
  }

  type UserVO = {
    /** 创建时间 */
    createTime?: string
    /** 用户id */
    id?: string
    /** 用户账号 */
    userAccount?: string
    /** 用户头像 */
    userAvatar?: string
    /** 用户简介 */
    userProfile?: string
    /** 用户角色 */
    userRole?: string
    /** 用户昵称 */
    username?: string
  }
}
