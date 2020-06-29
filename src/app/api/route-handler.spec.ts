import { RestApiService } from './Services/RestApiService';
import { HttpClient } from '@angular/common/http';

describe('RestApiService', () => {
  it('should create an instance', () => {
    expect(new RestApiService(HttpClient)).toBeTruthy();
  });
});
