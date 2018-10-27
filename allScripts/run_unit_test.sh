for TESTFILE in test/*Tests.js
do 
echo $TESTFILE 
node $TESTFILE
done
