<template>
  <a-table :columns="columns" :data-source="data" class="components-table-demo-nested">
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a-button type="primary" block>修改</a-button>
        <a-button type="primary" danger>删除</a-button>
      </template>
    </template>
    <template #expandedRowRender>
      <a-table :columns="innerColumns" :data-source="innerData" :pagination="false">
        <template #bodyCell="{ column }">
          <template v-if="column.key === 'state'">
            <span>
              <a-badge status="success" />
              Finished
            </span>
          </template>
          <template v-else-if="column.key === 'operation'">
            <span class="table-operation">
              <a>Pause</a>
              <a>Stop</a>
              <a-dropdown>
                <template #overlay>
                  <a-menu>
                    <a-menu-item>Action 1</a-menu-item>
                    <a-menu-item>Action 2</a-menu-item>
                  </a-menu>
                </template>
                <a>
                  More
                  <down-outlined />
                </a>
              </a-dropdown>
            </span>
          </template>
        </template>
      </a-table>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue';

const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '性别', dataIndex: 'sex', key: 'sex' },
  { title: '课程', dataIndex: 'course', key: 'course' },
  { title: '电话', dataIndex: 'phone', key: 'phone' },
  { title: '报名时间', dataIndex: 'apply_time', key: 'apply_time' },
  { title: '操作', key: 'operation' },
];

interface DataItem {
  key: number;
  name: string;
  sex: string;
  course: string;
  phone: number;
  apply_time: string;
}

const data: DataItem[] = [];
for (let i = 0; i < 3; ++i) {
  data.push({
    key: i,
    name: `张三 ${i + 1}`,
    sex: '女',
    course: '基础班',
    phone: 15642567547,
    apply_time: '2014-12-24 23:12:00',
  });
}

const innerColumns = [
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Status', key: 'state' },
  { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  {
    title: 'Action',
    dataIndex: 'operation',
    key: 'operation',
  },
];

interface innerDataItem {
  key: number;
  date: string;
  name: string;
  upgradeNum: string;
}

const innerData: innerDataItem[] = [];
for (let i = 0; i < 3; ++i) {
  innerData.push({
    key: i,
    date: '2014-12-24 23:12:00',
    name: `This is production name ${i + 1}`,
    upgradeNum: 'Upgraded: 56',
  });
}
</script>

