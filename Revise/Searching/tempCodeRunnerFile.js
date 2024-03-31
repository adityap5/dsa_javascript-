while (start<=end) {
        let mid  = start + ((end - start) / 2);
       if(target < nums[mid]){
            end = mid -1;
        }else if(target > nums[mid]){
            start = mid +1;
        }else{
           return mid;
       }
    }
    return -1;