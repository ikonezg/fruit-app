import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BananaTestService } from 'src/app/banana/banana-test.service';
import { BananaActions } from '../actions';
import { mergeMap, map } from 'rxjs/operators';
import { Banana } from 'src/app/core/core/models/banana';
import { Artikl } from 'src/app/core/core/models/artikl';


@Injectable()
export class BananaEffects {

  loadBananas$ = createEffect(() => this.actions$.pipe(
    ofType(BananaActions.loadBananas.type),
    /** An EMPTY observable only emits completion. Replace with your own observable stream */
    mergeMap(() => this.bananaService.getBananas().pipe(
      map((bananas: (Banana & Artikl)[]) => BananaActions.loadBananasSuccess({bananas}))
    )))
  );

  constructor(
    private actions$: Actions,
    private bananaService: BananaTestService) {}

}
