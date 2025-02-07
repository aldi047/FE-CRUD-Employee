<template>
  <div class = "container my-5">
    <div class="card">
      <div class="card-header">
        <h4>Add Student
          <NuxtLink class="btn btn-primary float-end" to="employee">Back</NuxtLink>
        </h4>
      </div>
      <div class="card-body">
        <div v-if="isLoading">
          <Loading :title="isLoadingTitle"/>
        </div>
        <div v-else>
          <form @submit.prevent="saveEmployee">
            <div class="mb-3">
              <label class="form-label">NIP</label>
              <input type="text" v-model="employee.nip" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Nama</label>
              <input type="text" v-model="employee.nama" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Tempat Lahir</label>
              <input type="text" v-model="employee.tp_lahir" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Alamat</label>
              <input type="text" v-model="employee.alamat" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Tanggal Lahir</label>
              <input type="text" v-model="employee.tg_lahir" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">L/P</label>
              <input type="text" v-model="employee.jenis_kl" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Golongan</label>
              <input type="text" v-model="employee.gol" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Eselon</label>
              <input type="text" v-model="employee.eselon" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Jabatan</label>
              <input type="text" v-model="employee.jabatan" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Tempat Tugas</label>
              <input type="text" v-model="employee.tp_tugas" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Agama</label>
              <input type="text" v-model="employee.agama" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Unit Kerja</label>
              <input type="text" v-model="employee.unit_kerja" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">No. HP</label>
              <input type="text" v-model="employee.no_hp" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">NPWP</label>
              <input type="text" v-model="employee.npwp" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "employeeCreate",
  data(){
    return{
      employee: {
        nip: '',
        nama: '',
        tp_lahir : '',
        alamat: '',
        tg_lahir: '',
        jenis_kl: '',
        gol: '',
        eselon: '',
        jabatan: '',
        tp_tugas: '',
        agama: '',
        unit_kerja: '',
        no_hp: '',
        npwp: '',
      },
      isLoading: false,
      isLoadingTitle: "Loading"
    }
  },
  methods: {
    saveEmployee(){
      this.isLoading = true;
      this.isLoadingTitle = "Saving";
    }
  }
}
</script>