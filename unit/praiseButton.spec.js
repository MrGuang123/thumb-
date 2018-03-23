describe('测试基本功能', function() {
    const instance = new window.praiseButton()
    it('+1函数的方法', function() {
        expect(instance.addThumbs(0)).toBe(1)
    })
})