public class FizzBuzz {
	public static void main(String[] args) {
		String FizzBuzzOrInteger = "";
		for(int i=1; i<=100; i++){
			
			FizzBuzzOrInteger += "\n";
			
			if(i % 3 == 0 && i % 5 == 0)
				FizzBuzzOrInteger += "Fizz-Buzz (" + i +")";
			
			else if(i % 3 == 0)
				FizzBuzzOrInteger += "Fizz (" + i +")";
			
			else if(i % 5 == 0)
				FizzBuzzOrInteger += "Buzz (" + i +")";
			
			else 
				FizzBuzzOrInteger += i;
		}
		System.out.println(FizzBuzzOrInteger);
	}
}
