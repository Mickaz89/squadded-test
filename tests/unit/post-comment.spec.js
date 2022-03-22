import { shallowMount } from '@vue/test-utils';
import PostComment from '../../src/components/PostComment.vue';

describe('Render Post Comment Component', () => {
  test('does a comment have a username and a content', () => {
    const comment = {
      username: 'Mickael',
      content: 'Very good trip',
    };
    const wrapper = shallowMount(PostComment, {
      propsData: {
        comment,
      },
    });
    expect(wrapper.text()).toContain(comment.username);
    expect(wrapper.text()).toContain(comment.content);
  });
});
