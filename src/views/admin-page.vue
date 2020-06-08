<template>
  <section class="admin-page">
    <div class="add-verbs-to-database">
      <h1>הוסף מילים חדשות</h1>
      <div class="form-box">
        <div class="form-row">
          <label class="input-label">שם הפועל</label>
          <input type="text" class="input-text" v-model="infinitive.heb" />
        </div>
        <div class="form-row">
          <label class="input-label">באנגלית</label>
          <input type="text" class="input-text" v-model="infinitive.eng" />
        </div>

        <div class="line-devider"></div>

        <h3 class="form-header">עבר</h3>
        <div class="form-row">
          <label class="input-label">אני</label>
          <input type="text" class="input-text" v-model="past.me" />
        </div>
        <div class="form-row">
          <label class="input-label">אנחנו</label>
          <input type="text" class="input-text" v-model="past.we" />
        </div>
        <div class="form-row">
          <label class="input-label">אתה</label>
          <input type="text" class="input-text" v-model="past.you_m_s" />
        </div>
        <div class="form-row">
          <label class="input-label">את</label>
          <input type="text" class="input-text" v-model="past.you_f_s" />
        </div>
        <div class="form-row">
          <label class="input-label">אתם</label>
          <input type="text" class="input-text" v-model="past.you_m_p" />
        </div>
        <div class="form-row">
          <label class="input-label">אתן</label>
          <input type="text" class="input-text" v-model="past.you_f_p" />
        </div>
        <div class="form-row">
          <label class="input-label">הוא</label>
          <input type="text" class="input-text" v-model="past.he" />
        </div>
        <div class="form-row">
          <label class="input-label">היא</label>
          <input type="text" class="input-text" v-model="past.she" />
        </div>
        <div class="form-row">
          <label class="input-label">הם/הן</label>
          <input type="text" class="input-text" v-model="past.they" />
        </div>

        <div class="line-devider"></div>

        <h3 class="form-header">הווה</h3>
        <div class="form-row">
          <label class="input-label">יחיד</label>
          <input type="text" class="input-text" v-model="present.m_s" />
        </div>
        <div class="form-row">
          <label class="input-label">יחידה</label>
          <input type="text" class="input-text" v-model="present.f_s" />
        </div>
        <div class="form-row">
          <label class="input-label">רבים</label>
          <input type="text" class="input-text" v-model="present.m_p" />
        </div>
        <div class="form-row">
          <label class="input-label">רבות</label>
          <input type="text" class="input-text" v-model="present.f_p" />
        </div>

        <div class="line-devider"></div>

        <h3 class="form-header">עתיד</h3>

        <div class="form-row">
          <label class="input-label">אני</label>
          <input type="text" class="input-text" v-model="future.me" />
        </div>
        <div class="form-row">
          <label class="input-label">אנחנו</label>
          <input type="text" class="input-text" v-model="future.we" />
        </div>
        <div class="form-row">
          <label class="input-label">אתה</label>
          <input type="text" class="input-text" v-model="future.you_m_s" />
        </div>
        <div class="form-row">
          <label class="input-label">את</label>
          <input type="text" class="input-text" v-model="future.you_f_s" />
        </div>
        <div class="form-row">
          <label class="input-label">אתם/אתן</label>
          <input type="text" class="input-text" v-model="future.you_p" />
        </div>
        <div class="form-row">
          <label class="input-label">הוא</label>
          <input type="text" class="input-text" v-model="future.he" />
        </div>
        <div class="form-row">
          <label class="input-label">היא</label>
          <input type="text" class="input-text" v-model="future.she" />
        </div>
        <div class="form-row">
          <label class="input-label">הם/הן</label>
          <input type="text" class="input-text" v-model="future.they" />
        </div>
        <button class="btn" @click="addVerb">Add verb</button>
      </div>
    </div>
  </section>
</template>

<script>
import verbService from "../services/verbService";
export default {
  data() {
    return {
      infinitive: {},
      past: {},
      present: {},
      future: {}
    };
  },
  methods: {
    async addVerb() {
      const verb = {
        infinitive: this.infinitive,
        past: this.past,
        present: this.present,
        future: this.future
        };
      const addedVerb = await verbService.addVerb(verb);
      console.log("ADDED VERB", addedVerb);
      this.infinitive = {},
      this.past = {},
      this.present = {},
      this.future = {}
    }
  }
};
</script>