/** * @author [Sanjith] * @email [sanjith.das@gmail.com] * @create date
2020-11-07 12:05:20 * @modify date 2020-11-07 12:05:20 * @desc [Dashboard -
Admin] */

<template>
  <div class="container mtop">
    <div class="row">
      <div class="col-md-3">
        <Menubar />
      </div>
      <div class="col-md-9">
        <div class="card">
          <div class="card-header"><b>Dashboard</b></div>
          <div class="card-body">
            <div class="text-primary"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Menubar from "../admin/Menubar";
export default {
  components: { Menubar },
};
</script>

<style scoped></style>
