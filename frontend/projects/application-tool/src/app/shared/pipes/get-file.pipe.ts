import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'projects/application-tool/src/environments/environment';

@Pipe({
  name: 'getFile',
})
export class GetFilePipe implements PipeTransform {
  transform(key: string): string {
    return (
      environment.firebase_file_endpoint +
        encodeURIComponent(key) +
        '?alt=media&token=8e519a74-4b3d-422c-a063-891b87702fde' || ''
    );
  }
}
