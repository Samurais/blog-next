<template>
  <div class="videos">
    <h1 class="ui teal huge header">Chatopera Engineering</h1>
    <h2 class="ui grey small header">Chatbot Service for Enterprise.</h2>
        <div class="ui cards">
            <div class="ui card">
              <h4>SuperScript: A dialog system and bot engine</h4>
              <iframe class="social-videos" frameborder="0" height="249" src="https://v.qq.com/iframe/player.html?vid=u0392y7e4xo&tiny=0&auto=0"
                allowfullscreen></iframe>
                <p><a href="http://www.leiphone.com/news/201704/JvBW78wfyvcfB4xW.html" target="_blank">@Leiphone Talk</a> / Apr. 7, 2017</p>
            </div>

            <div class="ui card">
              <h4>Get started with DeepLearning and TensorFlow</h4>
              <iframe class="social-videos"  frameborder="0" height="249" src="https://v.qq.com/iframe/player.html?vid=u0380c9l3qg&tiny=0&auto=0"
                allowfullscreen></iframe>
              <p><a href="https://github.com/rockq-org/chatbot-master-core" target="_blank">@Chatbot Master</a>  / Feb. 26, 2017</p>
            </div>


            <div class="ui card">
              <h4>Artificial Intelligence and Chatbot&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </h4>
              <iframe class="social-videos"  frameborder="0" width="280" height="249" src="http://v.qq.com/iframe/player.html?vid=v0318almc1k&tiny=0&auto=0" allowfullscreen></iframe>
              <p><a href="https://github.com/rockq-org/node-party" target="_blank">@NodeParty</a> / Jul. 23, 2016</p>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      posts: []
    }
  },
  methods: {
  },
  ready () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ui.segment {
  max-width: 400px;
  margin: auto;
}
.ui.piled.segments {
  padding-bottom: 4em;
}

img {
  min-height: 290px;
}

.social-videos {
    text-align:center;
    width:100%;
}
</style>
