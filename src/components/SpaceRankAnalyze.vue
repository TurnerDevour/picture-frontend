<template>
  <div class="space-xxx-analyze">
    <a-card title="空间资源使用排名分析">
      <v-chart :option="options" style="height: 320px" :loading="loading" />
    </a-card>
  </div>
</template>

<script setup lang="ts">
import 'echarts'
import VChart from 'vue-echarts'
import { computed, ref, watchEffect } from 'vue'
import { message } from 'ant-design-vue'
import { getSpaceRankAnalyzeUsingPost } from '@/api/spaceController'

interface Props {
  queryAll?: boolean
  queryPublic?: boolean
  spaceId?: string
}

withDefaults(defineProps<Props>(), {
  queryAll: false,
  queryPublic: false,
})

// 图表数据
const dataList = ref<API.Space[]>([])
const loading = ref(true)
const options = computed(() => {
  const spaceNames = dataList.value.map((item) => item.spaceName)
  const usageData = dataList.value.map(
    (item) => (Number(item.totalSize) / (1024 * 1024)).toFixed(2) ?? 0,
  ) // 转为 MB

  return {
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: spaceNames,
    },
    yAxis: {
      type: 'value',
      name: '空间使用量 (MB)',
    },
    series: [
      {
        name: '空间使用量 (MB)',
        type: 'bar',
        data: usageData,
        itemStyle: {
          color: '#5470C6', // 自定义柱状图颜色
        },
      },
    ],
  }
})

/**
 * 加载数据
 */
const fetchData = async () => {
  loading.value = true
  const res = await getSpaceRankAnalyzeUsingPost({
    // queryAll: props.queryAll,
    // queryPublic: props.queryPublic,
    // spaceId: props.spaceId,
    topN: 10, // 获取前10名
  })
  if (res.data.code === 0 && res.data.data) {
    dataList.value = res.data.data ?? []
  } else {
    await message.error('获取资源使用排名分析数据失败，' + res.data.message)
  }
  loading.value = false
}

/**
 * 监听变量，改变时触发数据的重新加载
 */
watchEffect(() => {
  fetchData()
})
</script>

<style scoped></style>
