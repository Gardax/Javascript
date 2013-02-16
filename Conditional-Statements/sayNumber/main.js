var number=prompt('put number','')|0;
if (number<10)
{
		switch (number)
		{
			case 0: document.write("Zero"); break;
			case 1: document.write("One"); break;
			case 2: document.write("Two"); break;
			case 3: document.write("Three"); break;
			case 4: document.write("Four"); break;
			case 5: document.write("Five"); break;
			case 6: document.write("Six"); break;
			case 7: document.write("Seven"); break;
			case 8: document.write("Eight"); break;
			case 9: document.write("Nine"); break;
		}
}else if (number>19 && number <100)
{
	var desetici=number/10;
	desetici=desetici|0;
	var num="";
	switch (desetici)
	{
		case 2: num=num+"Twenty"; break;
		case 3: num=num+"Thirty"; break;
		case 4: num=num+"Fourty"; break;
		case 5: num=num+"Fifty"; break;
		case 6: num=num+"Sixty"; break;
		case 7: num=num+"Seventy"; break;
		case 8: num=num+"Eighty"; break;
		case 9: num=num+"Ninty"; break;
	}
	var edinici=number%10;
	switch (edinici)
	{
		case 0: num=num+""; break;
		case 1: num=num+" One"; break;
		case 2: num=num+" Two"; break;
		case 3: num=num+" Three"; break;
		case 4: num=num+" Four"; break;
		case 5: num=num+" Five"; break;
		case 6: num=num+" Six"; break;
		case 7: num=num+" Seven"; break;
		case 8: num=num+" Eight"; break;
		case 9: num=num+" Nine"; break;
	}
	document.write(num);
}else if (number>9 && number< 20)
{
	switch (number)
	{
		case 10: document.write("Ten"); break;
		case 11: document.write("Eleven"); break;
		case 12: document.write("Twelve"); break;
		case 13: document.write("Thirteen"); break;
		case 14: document.write("Fourteen"); break;
		case 15: document.write("Fifteen"); break;
		case 16: document.write("Sixteen"); break;
		case 17: document.write("Seventeen"); break;
		case 18: document.write("Eighteen"); break;
		case 19: document.write("Ninteen"); break;
	}
}if (number>99 && number<1000)
{
	var stotici=number/100;
	stotici=stotici|0;
	var num="";
	switch (stotici)
	{
		case 1: num=num+"One hundred"; break;
		case 2: num=num+"Two hundred"; break;
		case 3: num=num+"Three hundred"; break;
		case 4: num=num+"Four hundred"; break;
		case 5: num=num+"Five hundred"; break;
		case 6: num=num+"Six hundred"; break;
		case 7: num=num+"Seven hundred"; break;
		case 8: num=num+"Eight hundred"; break;
		case 9: num=num+"Nine hundred"; break;
	}
	var desetici=number%100;
	desetici=desetici/10;
	desetici=desetici|0;
	if (desetici>1)
	{
		switch (desetici)
		{
			case 2: num=num+" Twenty"; break;
			case 3: num=num+" Thirty"; break;
			case 4: num=num+" Fourty"; break;
			case 5: num=num+" Fifty"; break;
			case 6: num=num+" Sixty"; break;
			case 7: num=num+" Seventy"; break;
			case 8: num=num+" Eighty"; break;
			case 9: num=num+" Ninty"; break;
		}
	}else if (desetici==1)
	{
		var number2=number%100;
		switch (number2)
		{
			case 10: num=num+" and Ten"; break;
			case 11: num=num+" and Eleven"; break;
			case 12: num=num+" and Twelve"; break;
			case 13: num=num+" and Thirteen"; break;
			case 14: num=num+" and Fourteen"; break;
			case 15: num=num+" and Fifteen"; break;
			case 16: num=num+" and Sixteen"; break;
			case 17: num=num+" and Seventeen"; break;
			case 18: num=num+" and Eighteen"; break;
			case 19: num=num+" and Ninteen"; break;
		}
	}else if (desetici==0)
	{
		num=num+" and"
	}
	if (desetici!=1)
	{
		var edinici=number%10;
		switch (edinici)
		{
			case 0: num=num+""; break;
			case 1: num=num+" One"; break;
			case 2: num=num+" Two"; break;
			case 3: num=num+" Three"; break;
			case 4: num=num+" Four"; break;
			case 5: num=num+" Five"; break;
			case 6: num=num+" Six"; break;
			case 7: num=num+" Seven"; break;
			case 8: num=num+" Eight"; break;
			case 9: num=num+" Nine"; break;
		}
	}
	document.write(num);

}
