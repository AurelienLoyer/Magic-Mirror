import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TheMirrorAppComponent } from '../app/the-mirror.component';

beforeEachProviders(() => [TheMirrorAppComponent]);

describe('App: TheMirror', () => {
  it('should create the app',
      inject([TheMirrorAppComponent], (app: TheMirrorAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'the-mirror works!\'',
      inject([TheMirrorAppComponent], (app: TheMirrorAppComponent) => {
    expect(app.title).toEqual('the-mirror works!');
  }));
});
