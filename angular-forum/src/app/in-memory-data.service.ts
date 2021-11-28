import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Post } from './post';
import {Category} from './category';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      { id: 1, name: 'post 1', description: 'asdasdasfhgdhsfadfgkvnrgekatgch', category: 1 },
      { id: 2, name: 'post 2', description: 'asdasdasfhgdhsfadfgkvnrgekatgch', category: 1  },
      { id: 3, name: 'post 3', description: 'asdasdasfhgdhsfadfgkvnrgekatgch', category: 2  },
      { id: 4, name: 'post 4', description: 'asdasdasfhgdhsfadfgkvnrgekatgch', category: 2  },
      { id: 5, name: 'post 5', description: 'asdasdasfhgdhsfadfgkvnrgekatgch', category: 3  },
      { id: 6, name: 'post 6', description: 'asdasdasfhgdhsfadfgkvnrgekatgch', category: 4  },
      { id: 7, name: 'post 7', description: 'asdasdasfhgdhsfadfgkvnrgekatgch', category: 4  },
      { id: 8, name: 'post 8', description: 'asdasdasfhgdhsfadfgkvnrgekatgch', category: 5  },
      { id: 9, name: 'post 9', description: 'asdasdasfhgdhsfadfgkvnrgekatgch', category: 6 },
      { id: 10, name: 'post 10', description: 'asdasdasfhgdhsfadfgkvnrgekatgch', category: 6  }
    ];
    const categories = [
      { id: 1, name: 'category 1'},
      { id: 2, name: 'category 2'},
      { id: 3, name: 'category 3'},
      { id: 4, name: 'category 4'},
      { id: 5, name: 'category 5'},
      { id: 6, name: 'category 6'}
    ];
    return {posts, categories};
  }


  genId(posts: Post[]): number {
    return posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 11;
  }
}