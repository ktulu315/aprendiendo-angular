import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNew } from './article-new';

describe('ArticleNew', () => {
  let component: ArticleNew;
  let fixture: ComponentFixture<ArticleNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
