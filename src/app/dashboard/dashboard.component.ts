import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel support

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Include FormsModule here
})
export class DashboardComponent {
  videos = [
    { title: 'Video 1', thumbnail: 'thumb1.jpg', createdAt: '2024-11-01' },
    { title: 'Video 2', thumbnail: 'thumb2.jpg', createdAt: '2024-11-02' },
  ];

  pagination = [1, 2, 3, 4, 5];
  showUploadModal = false;

  // Fixing the type of file to be either File or null
  newVideo = { title: '', description: '', file: null as File | null, thumbnail: null as File | null };

  onFileSelect(event: Event, type: string): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (type === 'video' && file.type.startsWith('video/')) {
        this.newVideo.file = file;
      } else if (type === 'thumbnail' && file.type.startsWith('image/')) {
        this.newVideo.thumbnail = file;
      } else {
        console.error('Invalid file type');
      }
    }
  }

  onCreatePost(): void {
    this.showUploadModal = true; // This will open the modal
    console.log('Create Post Clicked');
  }

  onLogout(): void {
    console.log('Logout Clicked');
  }

  onEdit(video: any): void {
    console.log('Edit video:', video);
  }

  onDelete(video: any): void {
    console.log('Delete video:', video);
  }

  onPageChange(page: number): void {
    console.log('Page Changed:', page);
  }

  closeUploadModal(): void {
    this.showUploadModal = false;
  }

  onVideoUpload(): void {
    if (this.newVideo.file && this.newVideo.thumbnail) {
      console.log('Video uploaded:', this.newVideo);
      // Perform the video upload logic here (e.g., sending to an API)
    } else {
      console.error('No video or thumbnail selected');
    }
    this.closeUploadModal();
  }
}
