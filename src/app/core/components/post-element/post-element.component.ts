import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PostElement, SublistItem } from '../../models/post/element';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PostElementType } from '../../models/post/element-type';

@Component({
  selector: 'ngnr-post-element',
  templateUrl: './post-element.component.html',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, PostElementComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostElementComponent implements OnInit {
  @Input() public element!: PostElement;

  @HostBinding('class') public get elementType(): string {
    return this.element.type.toLowerCase().replace('_', '-');
  }

  @HostBinding('class.answer') public get hiddenAnswer(): boolean {
    return this.element.hidden || false;
  }

  public image: boolean | string | null = null;

  public ElementType = PostElementType;

  public isVisible = false;

  public youtubeSrc!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  public ngOnInit(): void {
    if (this.element.type === PostElementType.IMAGE && this.element.content) {
      this.loadImage(this.element.content);
    } else if (
      this.element.type === PostElementType.YOUTUBE_VIDEO &&
      this.element.content
    ) {
      this.youtubeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.element.content
      );
    }
  }

  public isString(value: string | SublistItem): boolean {
    return typeof value === 'string';
  }

  public isSublistItem(item: string | SublistItem): item is SublistItem {
    return Object.prototype.hasOwnProperty.call(item, 'sublist');
  }

  private loadImage(url: string): void {
    this.image = url;
  }
}
