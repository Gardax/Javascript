var digit=prompt('put number','')|0;
switch (digit)
{
	case 1: document.write(digit*10); break;
	case 2: document.write(digit*10); break;
	case 3: document.write(digit*10); break;
	case 4: document.write(digit*100); break;
	case 5: document.write(digit*100); break;
	case 6: document.write(digit*100); break;
	case 7: document.write(digit*1000); break;
	case 8: document.write(digit*1000); break;
	case 9: document.write(digit*1000); break;
	default: document.write(digit+" is not in range [1...9]"); break;
}