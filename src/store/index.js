import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [
      {
        id: '1',
        likes: 20,
        username: 'Mickael',
        avatar: 'https://randomuser.me/api/portraits/men/80.jpg',
        postImage: 'https://source.unsplash.com/featured?technology',
        liked: false,
        comments: [
          {
            username: 'Bruno',
            content: 'Very Good Technology',
          },
          {
            username: 'Martin',
            content: 'Explain significance of quote.',
          },
          {
            username: 'George',
            content: 'Transitional word or sentence.',
          },
          {
            username: 'Isabelle',
            content: 'Topic Sentence in which you state your argument',
          },
          {
            username: 'Alexis',
            content: 'Transitional word or sentence.',
          },
          {
            username: 'Francis',
            content: 'Make me happy',
          },
          {
            username: 'Janette',
            content: 'Life is great',
          },
          {
            username: 'Mark',
            content: 'This is a revolution',
          },
          {
            username: 'Diana',
            content: 'Awesome',
          },
          {
            username: 'Sara',
            content: 'SO CRAZY !!!!!!!!!!!!',
          },
          {
            username: 'Chris',
            content: 'Vue is amazing',
          },
        ],
        showAllComments: false,
      },
      {
        id: '2',
        likes: 5,
        username: 'Stacy',
        avatar: 'https://randomuser.me/api/portraits/women/80.jpg',
        postImage: 'https://source.unsplash.com/featured?sport',
        liked: false,
        comments: [
          {
            username: 'Greg',
            content: 'Love this sport !!',
          },
          {
            username: 'Diana',
            content: 'Awesome',
          },
          {
            username: 'Isabelle',
            content: 'Topic Sentence in which you state your argument',
          },
          {
            username: 'Alexis',
            content: 'Transitional word or sentence.',
          },
        ],
        showAllComments: false,
      },
      {
        id: '3',
        likes: 212,
        username: 'John',
        avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
        postImage: 'https://source.unsplash.com/featured?food',
        liked: false,
        comments: [
          {
            username: 'Maria',
            content: 'Never seen food like this !!',
          },
          {
            username: 'Peter',
            content: 'Awesome',
          },
          {
            username: 'Diana',
            content: 'Quotation. Make sure you cite accurately',
          },
          {
            username: 'Isabelle',
            content: 'Topic Sentence in which you state your argument',
          },
          {
            username: 'Alexis',
            content: 'Transitional word or sentence.',
          },
          {
            username: 'Diana',
            content: 'Awesome',
          },
          {
            username: 'Isabelle',
            content: 'Explain significance of quote.',
          },
          {
            username: 'Alexis',
            content: 'Transitional word or sentence.',
          },
        ],
        showAllComments: false,
      },
    ],
  },
  getters: {
  },
  mutations: {
    incrementLikes: (state, postId) => {
      console.log(state, postId);
      const index = state.posts.findIndex((element) => element.id === postId);

      console.log('post finded ', index);
      state.posts[index].liked = !state.posts[index].liked;
      if (state.posts[index].liked) {
        state.posts[index].likes++;
      } else {
        state.posts[index].likes--;
      }
      console.log(state.posts);
    },
    showAllComments: (state, postId) => {
      const index = state.posts.findIndex((element) => element.id === postId);
      console.log('show comments index ', index);
      console.log('show comments state' , state.posts[index].showAllComments);
      state.posts[index].showAllComments = !state.posts[index].showAllComments;
      console.log('show comments after' , state.posts[index].showAllComments);
    },
  },
  actions: {
  },
  modules: {
  },
});
