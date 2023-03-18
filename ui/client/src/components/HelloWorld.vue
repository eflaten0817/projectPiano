<template>
  <v-container>
    <v-data-iterator :items="pianoWorks" :search="search">
      <template v-slot:header>
          <v-toolbar
            dark
            color="blue darken-3"
            class="mb-1"
          >
            <v-text-field
              v-model="search"
              clearable
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="Search"
            ></v-text-field>
          </v-toolbar>
        </template>
      <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
              :key="item._id"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card>
                <v-card-title class="subheading font-weight-bold">
                  {{ item.MovementPieceTitle }}
                </v-card-title>
  
                <v-divider></v-divider>
  
                
              </v-card>
            </v-col>
          </v-row>
        </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
  import { getAllworks } from '../../api/pianoWorks';

  export default {
    name: 'HelloWorld',

    data: () => ({
      pianoWorks: undefined,
      search: '',
    }),
    async created() {
      console.log('hello world');
      let works = await getAllworks();
      this.pianoWorks = works;
      console.log(works);
      return true;
    },
  }
  
</script>
