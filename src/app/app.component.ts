import { Component } from '@angular/core';
import { Store  } from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as PostActions from './actions/post.actions';
import { Post } from './models/post.model';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post: Observable<Post>;
  text: string;

  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post');
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  upVote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downVote() {
    this.store.dispatch(new PostActions.Downvote());
  }

  Reset() {
    this.store.dispatch(new PostActions.Reset());
    this.text = '';
  }


}
