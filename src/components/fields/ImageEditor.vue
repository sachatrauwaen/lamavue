<template>
  <div>
    <div class="modal-mask"></div>
    <div class="editor">
      <div style="margin-bottom:10px;">
        <vue-cropper
          ref="cropper"
          :responsive="true"
          :src="imageUrl"
          :data="cropperData"
          :aspect-ratio="ratio"
          :viewMode="1"
          :autoCropArea="1"
          alt="Image"
          :containerStyle="{maxHeight:'400px'}"
        ></vue-cropper>
      </div>
      <button
        type="button"
        class="btn btn-sm btn-secondary mr-2"
        @click.prevent="rotate(90)"
      >Rotate Right</button>
      <button
        type="button"
        class="btn btn-sm btn-secondary"
        @click.prevent="rotate(-90)"
      >Rotate Left</button>

      <div
        class="btn-group btn-group-sm ml-2"
        role="group"
        aria-label="Basic example"
        style="float:right"
      >
        <button type="button" class="btn btn-primary" @click.prevent="save">Save</button>
        <button type="button" class="btn btn-light" @click.prevent="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

//import DialogMixin from "vuejs-dialog/dist/vuejs-dialog-mixin.min.js";

export default {
  name: "ImageEditor",
  //mixins: [DialogMixin],
  props: {
    imageUrl: {},
    ratio:{},
    cropperData: {}
  },
  data() {
    return {};
  },
  methods: {
    save() {
      this.$emit(
        "save",
        this.$refs.cropper.getCroppedCanvas(),
        this.$refs.cropper.getData()
      );
    },
    cancel() {
      this.$emit("cancel");
    },
    rotate(deg) {
      this.$refs.cropper.rotate(deg);
    }
  },
  components: {
    VueCropper
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.overlay {
  bottom: 0%;
  opacity: 0.6;
  transition: opacity 0.3s;

  background: #000;
  bottom: 100%;
  left: 0;
  opacity: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.3s, bottom 0s 0.3s;
  z-index: 310;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.editor {
  position: relative;
  background-color: #fff;
  z-index: 9999;
  border: 5px solid #fff;
  border-radius: 5px;
}
</style>
