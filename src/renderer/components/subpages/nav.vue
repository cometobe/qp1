<template>
  <div>
    <Row>
      <Menu mode="horizontal" active-name="1">
        <router-link to="/">
          <MenuItem name="1">
            <Icon type="ios-home"/>首页
          </MenuItem>
        </router-link>
        <router-link to="/stand">
          <MenuItem name="2">
            <Icon type="ios-home"/>标准库
          </MenuItem>
        </router-link>
        <router-link to="/excel">
          <MenuItem name="3">
            <Icon type="ios-home"/>数据导入
          </MenuItem>
        </router-link>
        <router-link to="/trend">
          <MenuItem name="4">
            <Icon type="ios-home"/>积分查询
          </MenuItem>
        </router-link>
        <router-link to="/Setting">
          <MenuItem name="5">
            <Icon type="ios-home"/>设置
          </MenuItem>
        </router-link>
      </Menu>
    </Row>
  </div>
</template>
<script>
export default {
  name: "navg",
  data() {
    return {
      uploadLoading: false,
      progressPercent: 0,
      showProgress: false,
      showRemoveFile: false,
      file: null,
      tableData: [],
      tableTitle: [],
      tableLoading: false
    };
  }
};
</script>