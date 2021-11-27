import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      { id: 1, name: 'post 1', description: 'asdasdasfhgdhsfadfgkvnrgekatgch', category: "1" },
      { id: 2, name: 'post 2', description: 'asdasdasfhgdhsfadfgkvnrgekatgch', category: "1"  },
      { id: 3, name: 'post 3', description: 'asdasdasfhgdhsfadfgkvnrgekatgch', category: "2"  },
      { id: 4, name: 'post 4', description: 'asdasdasfhgdhsfadfgkvnrgekatgch', category: "2"  },
      { id: 5, name: 'post 5', description: 'asdasdasfhgdhsfadfgkvnrgekatgch', category: "3"  },
      { id: 6, name: 'post 6', description: 'asdasdasfhgdhsfadfgkvnrgekatgch', category: "4"  }
    ];
    return {posts};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(posts: Post[]): number {
    return posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 11;
  }
}