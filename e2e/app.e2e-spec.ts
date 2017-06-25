import { UiExerciseRestPage } from './app.po';

describe('ui-exercise-rest App', () => {
  let page: UiExerciseRestPage;

  beforeEach(() => {
    page = new UiExerciseRestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
